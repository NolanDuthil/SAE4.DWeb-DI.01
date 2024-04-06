<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $imgFile */
            $imgFile = $form->get('img')->getData();
    
            // Cette condition est nécessaire car le champ 'img' n'est pas requis
            // donc le fichier doit être traité seulement lorsqu'il est téléchargé
            if ($imgFile) {
                $originalFilename = pathinfo($imgFile->getClientOriginalName(), PATHINFO_FILENAME);
                // Ceci est nécessaire pour inclure en toute sécurité le nom du fichier original dans l'URL
                $safeFilename = $safeFilename = preg_replace('/[^A-Za-z0-9_\-]/', '', $originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$imgFile->guessExtension();
    
                // Déplacez le fichier dans le répertoire où les images de profil sont stockées
                try {
                    $imgFile->move(
                        $this->getParameter('profile_images_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... gérer l'exception si quelque chose se passe mal lors du téléchargement du fichier
                }
    
                // met à jour la propriété 'img' pour stocker le nom du fichier de l'image
                // au lieu de son contenu
                $user->setImg($newFilename);
            } else {
                $user->setImg(null);
            }
    
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
    
            $entityManager->persist($user);
            $entityManager->flush();
    
            // do anything else you need here, like send an email
    
            return $this->redirectToRoute('app_redirectToHome');
        }
    
        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }
}

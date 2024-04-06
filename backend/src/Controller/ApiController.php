<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\MovieRepository;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;

class ApiController extends AbstractController
{
  #[Route('/api', name: 'app_api')]
  public function index(): Response
  {
    return $this->render('api/index.html.twig', [
      'controller_name' => 'ApiController',
    ]);
  }

  #[Route('/api/movie/{id}', name: 'app_api_movie')]
  public function readMovie(Movie $mov, SerializerInterface $serializer): Response
  {
    $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/category/{id}', name: 'app_api_category')]
  public function readCategory(Category $mov, SerializerInterface $serializer): Response
  {
    $data = $serializer->normalize($mov, null, ['groups' => 'json_category']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/movie', name: 'app_api_allmovie')]
  public function readAllMovie(MovieRepository $mov, SerializerInterface $serializer): Response
  {
    $movie = $mov->findAll();
    $data = $serializer->normalize($movie, null, ['groups' => 'json_movie']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/search/{query}', name: 'app_api_search')]
  public function search(string $query, MovieRepository $mov, SerializerInterface $serializer): Response
  {
    $query = '%' . $query . '%';
    $movies = $mov->createQueryBuilder('m')
      ->where('m.name LIKE :query')
      ->setParameter('query', $query)
      ->getQuery()
      ->getResult();

    $data = $serializer->normalize($movies, null, ['groups' => 'json_search']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/category', name: 'app_api_allcategory')]
  public function readAllCategory(CategoryRepository $cat, SerializerInterface $serializer): Response
  {
    $category = $cat->findAll();
    $data = $serializer->normalize($category, null, ['groups' => 'json_category']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/category/name/', name: 'app_api_categories_name')]
  public function readCategoriesName(CategoryRepository $categoryRepository, SerializerInterface $serializer): Response
  {
    $categories = $categoryRepository->findAll();
    $data = $serializer->normalize($categories, null, ['groups' => 'json_category_name']);
    $response = new JsonResponse($data);
    return $response;
  }

  #[Route('/api/user', name: 'app_api_user')]
  public function getUserInfo(SerializerInterface $serializer): JsonResponse
  {
    $user = $this->getUser();

    if ($user) {
      $data = $serializer->normalize($user, null, ['groups' => 'json_user']);
      return new JsonResponse($data);
    }

    return new JsonResponse(['error' => 'Not logged in'], 401);
  }

  #[Route('/api/playlist/', name: 'app_api_playlist')]
  public function getUserMovies(SerializerInterface $serializer): JsonResponse
  {
    $user = $this->getUser();

    if ($user) {
      $movies = $user->getMovie();
      $data = $serializer->normalize($movies, null, ['groups' => 'json_playlist']);
      return new JsonResponse($data);
    }

    return new JsonResponse(['error' => 'Not logged in'], 401);
  }

#[Route('/api/playlist/add/{movieId}', name: 'app_api_playlist_add')]
    public function addMovieToPlaylist(int $movieId, SerializerInterface $serializer, EntityManagerInterface $em, MovieRepository $movieRepository): JsonResponse
    {
        $user = $this->getUser();

        if ($user) {
            $movie = $movieRepository->find($movieId);

            if ($movie) {
                $user->addMovie($movie);
                $em->flush();

                return new JsonResponse(['success' => 'Movie added to playlist']);
            }

            return new JsonResponse(['error' => 'Movie not found']);
        }

        return new JsonResponse(['error' => 'Not logged in']);
    }

    #[Route('/api/playlist/remove/{movieId}', name: 'app_api_playlist_remove')]
    public function removeMovieFromPlaylist(int $movieId, SerializerInterface $serializer, EntityManagerInterface $em, MovieRepository $movieRepository): JsonResponse
    {
        $user = $this->getUser();

        if ($user) {
            $movie = $movieRepository->find($movieId);

            if ($movie) {
                $user->removeMovie($movie);
                $em->flush();

                return new JsonResponse(['success' => 'Movie removed from playlist']);
            }

            return new JsonResponse(['error' => 'Movie not found']);
        }

        return new JsonResponse(['error' => 'Not logged in']);
    }

}






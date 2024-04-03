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

  #[Route('/api/search', name: 'app_api_search')]
  public function readSearch(MovieRepository $mov, CategoryRepository $cat, SerializerInterface $serializer): Response
  {
    $movie = $mov->findAll();
    $category = $cat->findAll();

    $data = [
      'movies' => $serializer->normalize($movie, null, ['groups' => 'json_movie']),
      'categories' => $serializer->normalize($category, null, ['groups' => 'json_category'])
    ];

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
}




<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[Groups(['json_category'])]
class Category
{
   #[ORM\Id]
   #[ORM\GeneratedValue]
   #[ORM\Column]
   #[Groups(['json_movie'])]
   private ?int $id = null;


   #[ORM\Column(length: 255)]
   #[Groups(['json_movie'])]
   private ?string $name = null;


   #[ORM\ManyToMany(targetEntity: Movie::class, mappedBy: 'category')]
   private Collection $movies;

   #[ORM\ManyToOne(inversedBy: 'category')]
   #[ORM\JoinColumn(nullable: true)]


    public function __construct()
    {
        $this->movies = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->name;
    } 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Movie>
     */
    public function getMovies(): Collection
    {
        return $this->movies;
    }

    public function addMovie(Movie $movie): static
    {
        if (!$this->movies->contains($movie)) {
            $this->movies->add($movie);
            $movie->addCategory($this);
        }

        return $this;
    }

    public function removeMovie(Movie $movie): static
    {
        if ($this->movies->removeElement($movie)) {
            $movie->removeCategory($this);
        }

        return $this;
    }
}

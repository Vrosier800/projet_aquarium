<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FishRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: FishRepository::class)]
class Fish
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 80)]
    private ?string $specie = null;

    #[ORM\Column(length: 80)]
    private ?string $specieLatin = null;

    #[ORM\Column]
    private ?bool $actuallyInAquarium = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $entryDate = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $exitDate = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $note = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Picture $picture = null;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSpecie(): ?string
    {
        return $this->specie;
    }

    public function setSpecie(string $specie): static
    {
        $this->specie = $specie;

        return $this;
    }

    public function getSpecieLatin(): ?string
    {
        return $this->specieLatin;
    }

    public function setSpecieLatin(string $specieLatin): static
    {
        $this->specieLatin = $specieLatin;

        return $this;
    }

    public function isActuallyInAquarium(): ?bool
    {
        return $this->actuallyInAquarium;
    }

    public function setActuallyInAquarium(bool $actuallyInAquarium): static
    {
        $this->actuallyInAquarium = $actuallyInAquarium;

        return $this;
    }

    public function getEntryDate(): ?\DateTimeImmutable
    {
        return $this->entryDate;
    }

    public function setEntryDate(\DateTimeImmutable $entryDate): static
    {
        $this->entryDate = $entryDate;

        return $this;
    }

    public function getExitDate(): ?\DateTimeImmutable
    {
        return $this->exitDate;
    }

    public function setExitDate(?\DateTimeImmutable $exitDate): static
    {
        $this->exitDate = $exitDate;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): static
    {
        $this->note = $note;

        return $this;
    }

    public function getPicture(): ?Picture
    {
        return $this->picture;
    }

    public function setPicture(?Picture $picture): static
    {
        $this->picture = $picture;

        return $this;
    }
}

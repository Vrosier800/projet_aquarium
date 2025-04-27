<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ParameterRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: ParameterRepository::class)]
class Parameter
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?float $temperature = null;

    #[ORM\Column(nullable: true)]
    private ?float $density = null;

    #[ORM\Column(nullable: true)]
    private ?float $ph = null;

    #[ORM\Column(nullable: true)]
    private ?float $no2 = null;

    #[ORM\Column(nullable: true)]
    private ?float $no3 = null;

    #[ORM\Column(nullable: true)]
    private ?float $po4 = null;

    #[ORM\Column(nullable: true)]
    private ?float $ca = null;

    #[ORM\Column(nullable: true)]
    private ?float $mg = null;

    #[ORM\Column(nullable: true)]
    private ?float $kh = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $measureAt = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    public function __construct()
    {
        $this->measureAt = new \DateTimeImmutable();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTemperature(): ?float
    {
        return $this->temperature;
    }

    public function setTemperature(?float $temperature): static
    {
        $this->temperature = $temperature;

        return $this;
    }

    public function getDensity(): ?float
    {
        return $this->density;
    }

    public function setDensity(?float $density): static
    {
        $this->density = $density;

        return $this;
    }

    public function getPh(): ?float
    {
        return $this->ph;
    }

    public function setPh(?float $ph): static
    {
        $this->ph = $ph;

        return $this;
    }

    public function getNo2(): ?float
    {
        return $this->no2;
    }

    public function setNo2(?float $no2): static
    {
        $this->no2 = $no2;

        return $this;
    }

    public function getNo3(): ?float
    {
        return $this->no3;
    }

    public function setNo3(?float $no3): static
    {
        $this->no3 = $no3;

        return $this;
    }

    public function getPo4(): ?float
    {
        return $this->po4;
    }

    public function setPo4(?float $po4): static
    {
        $this->po4 = $po4;

        return $this;
    }

    public function getCa(): ?float
    {
        return $this->ca;
    }

    public function setCa(?float $ca): static
    {
        $this->ca = $ca;

        return $this;
    }

    public function getMg(): ?float
    {
        return $this->mg;
    }

    public function setMg(?float $mg): static
    {
        $this->mg = $mg;

        return $this;
    }

    public function getKh(): ?float
    {
        return $this->kh;
    }

    public function setKh(?float $kh): static
    {
        $this->kh = $kh;

        return $this;
    }

    public function getMeasureAt(): ?\DateTimeImmutable
    {
        return $this->measureAt;
    }

    public function setMeasureAt(\DateTimeImmutable $measureAt): static
    {
        $this->measureAt = $measureAt;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): static
    {
        $this->comment = $comment;

        return $this;
    }
}

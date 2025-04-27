<?php

namespace App\DataFixtures;

use App\Entity\Coral;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CoralFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $anemone = new Coral();
        $anemone->setSpecie("Heteractis Crispa");
        $anemone->setEntryDate(new \DateTimeImmutable());
        $anemone->setColor("Gris");
        $anemone->setType("WYSIWYG");
        $anemone->setActuallyInAquarium(false);
        $manager->persist($anemone);

        $manager->flush();
    }
}

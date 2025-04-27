<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Fish;

class FishFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $chirurgien = new Fish();
        $chirurgien->setSpecie("Chirurgien à queue blanche");
        $chirurgien->setSpecieLatin("Ctenochaetus Flavicauda");
        $chirurgien->setEntryDate(new \DateTimeImmutable());
        $chirurgien->setActuallyInAquarium(true);
        $manager->persist($chirurgien);

        $clown = new Fish();
        $clown->setSpecie("Clown");
        $clown->setSpecieLatin("amphiprion Occelaris");
        $clown->setEntryDate(new \DateTimeImmutable());
        $clown->setActuallyInAquarium(true);
        $manager->persist($clown);

        $labre = new Fish();
        $labre->setSpecie("Labre Rouge");
        $labre->setSpecieLatin("Bodianus Opercularis");
        $labre->setEntryDate(new \DateTimeImmutable());
        $labre->setActuallyInAquarium(true);
        $manager->persist($labre);

        $clown2 = new Fish();
        $clown2->setSpecie("Clown");
        $clown2->setSpecieLatin("Amphiprion Occelaris");
        $clown2->setEntryDate(new \DateTimeImmutable());
        $clown2->setActuallyInAquarium(false);
        $manager->persist($clown2);


        $manager->flush();
    }
}

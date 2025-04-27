<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\AquariumTank;

class AquariumTankFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $aqua = new AquariumTank();
        $aqua->setName('Tank');
        $aqua->setHeight(12.5);
        $aqua->setLength(12.5);
        $aqua->setWidth(12.5);
        $aqua->setVolume(300);
        $aqua->setStartDate(new \DateTime());
        $manager->persist($aqua);

        $manager->flush();
    }
}

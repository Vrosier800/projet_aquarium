<?php

namespace App\DataFixtures;

use App\Entity\Parameter;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ParameterFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $parameter1 = new Parameter();
        $parameter1->setTemperature(26);
        $parameter1->setKh(6);
        $parameter1->setCa(420);
        $parameter1->setMg(1300);
        $parameter1->setPh(8.2);
        $parameter1->setDensity(1024);
        $parameter1->setNo2(0);
        $parameter1->setNo3(5);
        $parameter1->setPo4(0.05);
        $parameter1->setComment("On test avec tous les paramètres");

        $manager->persist($parameter1);

        $parameter2 = new Parameter();
        $parameter2->setKh(8);
        $parameter2->setCa(390);
        $parameter2->setMg(1000);
        $parameter2->setPh(7.5);
        $parameter2->setMeasureAt(new \DateTimeImmutable('+7 days'));
        $parameter2->setComment("On test avec quelques paramètres...");

        $manager->persist($parameter2);

        $manager->flush();
    }
}

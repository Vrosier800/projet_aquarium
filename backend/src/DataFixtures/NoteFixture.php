<?php

namespace App\DataFixtures;

use App\Entity\Note;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class NoteFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $note1 = new Note();
        $note1->setText("Ceci est une note");
        $manager->persist($note1);

        $note2 = new Note();
        $note2->setText("Ceci est une autre note");
        $manager->persist($note2);

        $note3 = new Note();
        $note3->setText("Ceci est une troisième note : lorem ipsum blablablablabla");
        $manager->persist($note3);

        $manager->flush();
    }
}

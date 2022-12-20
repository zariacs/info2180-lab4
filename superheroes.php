<?php

$superheroes = [
    [
        "id" => 1,
        "name" => "Steve Rogers",
        "alias" => "Captain America",
        "biography" => "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
    ],
    [
        "id" => 2,
        "name" => "Tony Stark",
        "alias" => "Ironman",
        "biography" => "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    ],
    [
        "id" => 3,
        "name" => "Peter Parker",
        "alias" => "Spiderman",
        "biography" => "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
    ],
    [
        "id" => 4,
        "name" => "Carol Danvers",
        "alias" => "Captain Marvel",
        "biography" => "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    ],
    [
        "id" => 5,
        "name" => "Natasha Romanov",
        "alias" => "Black Widow",
        "biography" => "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
    ],
    [
        "id" => 6,
        "name" => "Bruce Banner",
        "alias" => "Hulk",
        "biography" => "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    ],
    [
        "id" => 7,
        "name" => "Clint Barton",
        "alias" => "Hawkeye",
        "biography" => "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    ],
    [
        "id" => 8,
        "name" => "T'challa",
        "alias" => "Black Panther",
        "biography" => "T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.",
    ],
    [
        "id" => 9,
        "name" => "Thor Odinson",
        "alias" => "Thor",
        "biography" => "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
    ],
    [
        "id" => 10,
        "name" => "Wanda Maximoff",
        "alias" => "Scarlett Witch",
        "biography" => "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
    ],
];

?>





<?php
// Includes server-side form validation and sanitization
$hero_search = strip_tags($_POST["hero"]);

if (isset($hero_search) && !empty($hero_search)) {
    // Searches for hero and returns hero info if found. If unfound, returns message stating this
    $hero_found = false;

    foreach ($superheroes as $superhero) {
        if (array_search($hero_search, $superhero, true)) {
            $hero_found = true;
            echo json_encode($superhero);
            exit();
        } 
    }
    if ($hero_found == false) {
        $unFound = ["unFoundMessage" => "SUPERHERO NOT FOUND"];
            echo json_encode($unFound);
    }

} else if ((isset($hero_search) && empty($hero_search))) {
    // Since form field was empty, returns list of all superheroes
    $hero_list = [];
    foreach ($superheroes as $superhero) {
        array_push($hero_list, $superhero['alias']);
    }
    echo json_encode($hero_list); 
} else {
    echo json_encode(["error" => "ERROR"]);
}

?>



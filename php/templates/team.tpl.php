<main>
    <div class="container">
        <div class="container-team">
            <?php foreach ($teams as $team) : ?>
                <div class="card-team">

                    <img class="card-team-img" src="<?= $team['img'] ?>" alt="">

                    <div class="card-team-text">
                        <h1><?= $team['name'] ?></h1>
                        <h2><?= $team['titre'] ?></h2>
                        <p><?= $team['description'] ?></p>
                        <p><?= $team['main-class'] ?></p>
                        <ul>
                            <?php foreach ($team['other-class'] as $other) : ?>
                            <li><?= $other ?></li>
                            <?php endforeach ?>
                        </ul>
                    </div>
                </div>
            <?php endforeach ?>

        </div>
</main>
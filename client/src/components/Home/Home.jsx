import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Home.css';


const Home = () => {

  // Much of this would be separate components given more time to build out properly

  return (
    <div className={styles.home}>
        <h1>Welcome to ShinyHunter!</h1>
    <div className={styles.main}>
      <div className={styles.intro}>
        <p>ShinyHunter is a utility designed for Pokemon Sword and Shield that allows users to have a service that keeps track of what shiny Pokemon you're hunting and which you have.</p>

        <p>It also provides users with a sanity check in the form of a calculator! If you've shiny hunted before, surely you can relate to feeling like you've seen the same Pokemon thousands of times and getting frustrated that you haven't come across the shiny form yet. ShinyHunter provides a simple tick counter that lets you keep track of how many times you have seen a Pokemon, which can then be used to calculate the odds you haven't found your quarry yet. Now you can definitively PROVE to your friends how lucky or unlucky you were, and this information is stored with the Pokemon entry when you finally do catch it so you can remember your luck forever!</p>

        <p>ShinyHunter's Friends functionality allows you to see what your friends are hunting and their luck, and industrious users could use this to initiate trades.</p>
      </div>

      <div className={styles.feed}>
        <p>Your friend Marko is currently hunting: <em>Eevee</em> and is on number: <em>158</em></p>
      </div>
    </div>

      <div className={styles.resources}>
        <h2>Here are some additional Pokemon resources!</h2>

        <h3>My go-to resources:</h3>
          <a href='https://serebii.net/'>Serebii.net</a>

        <h3>Additional resources:</h3>
          <a href='https://bulbapedia.bulbagarden.net/wiki/Main_Page'>Bulbapedia</a>
          <a href='https://www.youtube.com/watch?v=3etkGxGz-4g&list=PLZ0gJrxeLYxxybmPVNttMn-usAGDOu_kQ'>A great Pokemon music playlist</a>

        <h3>Subreddits:</h3>
          <a href='https://www.reddit.com/r/ShinyPokemon/'>Shiny Hunting Subreddit</a><br />
          <a href='https://www.reddit.com/r/pokemon/'>General Pokemon Subreddit</a><br />
          <a href='https://www.reddit.com/r/PokemonSwordAndShield/'>Pokemon Sword and Shield Subreddit</a><br />
          <a href='https://www.reddit.com/r/stunfisk/'>Competitive Subreddit</a><br />
          <a href='https://www.reddit.com/r/pokemonmemes/'>Pokemon Memes Subreddit &#40;it's not that funny...&#41;</a>
      </div>

    </div>
  )
}

export default Home;
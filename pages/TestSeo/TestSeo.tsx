import type { NextPage } from 'next'
import Head from 'next/head';

function TestSeo() {
  return (
    <>
      <Head>
        <title>Best Italian Restaurants in New York City | Italian Food Guide</title>
        <meta name="description" content="Discover the best Italian restaurants in New York City with our Italian food guide. We've reviewed the top Italian restaurants and dishes in NYC." />
      </Head>
      <header>
        <h1>Best Italian Restaurants in New York City</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/italian-food-guide/">Italian Food Guide</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Top Italian Restaurants in NYC</h2>
          <ul>
            <li><a href="/italian-restaurants-nyc/joeys-pizza/">Joey's Pizza</a></li>
            <li><a href="/italian-restaurants-nyc/trattoria-toscana/">Trattoria Toscana</a></li>
            <li><a href="/italian-restaurants-nyc/l-artusi/">L'Artusi</a></li>
          </ul>
        </section>
        <section>
          <h2>Italian Dishes to Try in NYC</h2>
          <ul>
            <li>Pizza Margherita</li>
            <li>Spaghetti alla Carbonara</li>
            <li>Tiramisu</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Italian Food Guide</p>
      </footer>
    </>
  );
}

export default TestSeo


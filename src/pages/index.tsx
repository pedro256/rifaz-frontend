import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rifaz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.ico" />
        
      </Head>
      <main>
        <div>
          <Link href="login" >
            <button>
              login
            </button>
          </Link>

        </div>
      </main>
    </>
  )
}

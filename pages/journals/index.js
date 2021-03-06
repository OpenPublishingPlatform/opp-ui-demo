import axios from 'axios'
import Link from 'next/link'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function JournalIndexPageRender({ allJournals }) {
  return (
    <AppTemplate title="Our journals - Open Core CMS Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>
            Journal content
          </h1>
          <p>In this demo site we publish
          Open Access content made available by other publishers.</p>
        </div>
      </div>

      <main>
        <div className="maxWidthLimitedContainer">
          <ul>
            {allJournals.map((journal) => {
              return <li key={journal.id}>
                <Link href="/journals/[journalId]" as={`/journals/${journal.id}`}>
                  <a>{journal.name}</a>
                </Link>
              </li>
            })}

          </ul>
        </div>
      </main>
    </AppTemplate>
  )
}


export async function getServerSideProps({ query }) {
  const phrase = query.phrase;
  let targetUrl = `${process.env.OCC_UI_URL}/api/v1/publications/journals/getAllJournals`;
  if (typeof phrase === 'string' && phrase.length) {
    targetUrl += `?phrase=${phrase}`;
  }

  const { data } = await axios.get(targetUrl);
  // console.log(data);
  return {
    props: {
      allJournals: data,
    },
  };
}

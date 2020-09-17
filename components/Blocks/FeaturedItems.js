import Link from 'next/link'

import styles from './FeaturedItems.module.css'

export default function FeaturedItemsComponent({ items = [] }) {

  const markup = items.map((item) => (
    <li className={styles.item} key={item.id}>
      <span className={styles.image}>
        <img className="coverImageSmall" src={`https://dummyimage.com/120x160/aaa/fff.png&text=${item.id}`} />
      </span>
      <span className={styles.description}>
        <Link href="/journals/[journalId]/article/[itemId]/article-name" as={`/journals/${item.journalId}/article/${item.id}/article-name`}>
          <a>{item.title}</a>
        </Link>
        <span>{item.authorLine}</span><br />
        <span>{item.titlePrefix}</span><br />
      </span>
    </li>
  ));

  return <ul className={styles.featuredItems}>{markup}</ul>;
}

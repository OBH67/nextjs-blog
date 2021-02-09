import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/Link'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <br />
      <Link href="/">
      <a>Ir a inicio</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
import Head from '../components/Head'
import blogService from '../services/blog'
import menuService from '../services/menu'
import Blog from '../components/Blog'

export default (props) => (
  <>
    <Head title="Home" 
    description="A simple static blog with drupal and nextjs"/>
    <Blog posts={props.posts} />
  </>
)

export async function getStaticProps() {
  const posts = await blogService.getAll()
  const menuItems = await menuService.get('main')

  return {
    props: {
      posts,
      menuItems
    },
  }
}
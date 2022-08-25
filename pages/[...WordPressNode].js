import { wordPressServerSideProps, WordPressNode } from 'wp-next'
// import { gql } from '@apollo/client'
//
// Uncomment to override templates
//
// const templates = {
//     'singular': {
//         query: gql`{ __typename }`,
//         component: props => {
//             return (
//                 <>
//                     <h2>This is my custom singular template</h2>
//                     <pre>{JSON.stringify(props, null, 2)}</pre>
//                 </>
//             )
//         }
//     }
// }

const WordPressNodeTemplate = props => {
    return <WordPressNode templates={{}} {...props} />
}

export default WordPressNodeTemplate

// use this for SSR instead of Static
// 
// export async function getServerSideProps(context) {
//  return await wordPressServerSideProps(context)
// }

export async function getStaticProps(context) {
    return await wordPressServerSideProps(context)
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
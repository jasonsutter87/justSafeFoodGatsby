import { builder, BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'

builder.init('ee03a36eb3a340d6a768506bc4f11c1f')

const MyComponent = (props) => {
  const content = props.data?.allBuilderModels.onePage?.content;

  return <BuilderComponent
    content={content}
    model="page" />
}

export default MyComponent;      

export const query = graphql`
  query($path: String!) {
    allBuilderModels {
      onePage(
        target: { urlPath: $path }
        options: { cachebust: true }
      ) { content }
    }
  }
`
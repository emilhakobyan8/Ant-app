import { gql } from '@apollo/client'


export const GET_ANTS = gql`

 {
 ants {
    name,
    weight,
    color,
    length
  }
 } 
`

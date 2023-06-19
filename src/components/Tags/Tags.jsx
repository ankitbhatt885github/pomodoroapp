import styled, {css} from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";



const Tags = () => {

    //initially 0th index i.e. Work is activeTag

    //instead of useState we can use useontext because we are importing it from Context
    const {activeTag,setActiveTag} = useContext(StateContext);

    //to change bg color of active tag
    const handleTagClick = (index) => {
        setActiveTag(index);
    }



   return <TagsContainer>{["Work", "Short Break", "Long Break"].map((tag,i) => (
    <Tag onClick={() => handleTagClick(i)} activeTag = {activeTag === i} key={i}>{tag}</Tag>
   ))}
    </TagsContainer>
};


export default Tags;

//styled components
const TagsContainer = styled.div`

background: #116D6E;
height: 5rem;
width: 40rem;
margin: 0 auto;
border-radius: 5rem;
display: flex;
gap: 1rem;
align-items: center;

`

const Tag = styled.button`
all: unset;
height: 4rem;
text-align: center;


border-radius: 5rem;
flex:1;
font-size: 2rem;



${({activeTag}) => 
activeTag && 
css`
background: #B9EDDD;
color:black;
`}
`
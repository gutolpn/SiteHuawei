import styled from "styled-components"

export const CardStyle = styled.div`
    width: 100%;
    aspect-ratio:1;
    max-width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;  
    transition: 1s ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(5, 2, 53, 0.4);
    background-blend-mode: multiply;

    img{ 
        visibility: hidden;
        height: 100%;
        width: 100%;
    }

    p{
        color: rgba(255, 255, 255, 0.5);
        font-size: 40px;
        font-weight: 500;
        max-width: 170px;
        text-align: center;
        line-height:1 ;
        position: absolute;
    }
    
    &:hover{
        background-color: rgba(5, 2, 53, 0.6);
        transition: 1s ;
        
        p{
            color: #fff;
            transition: 1s ;
        }
    }

    @media(max-width:950px){
        max-width: 260px;
    }
    
`
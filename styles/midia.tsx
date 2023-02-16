import styled from 'styled-components'

const MidiaStyle = styled.section`
    background-color: #fafafa;
    min-height: 100vh;

    .banner{
        background: -webkit-radial-gradient(30% 30%,#ed4b50,#b60108,#e91322);
        padding: 90px 10px 3px;

        .container{
            h2{
                color: #fff;
                font-size: 50px;
                font-weight: 400;
                letter-spacing: 8px;
            }
        }
    }

    .body{
        padding: 100px 20px;
        .container{
            display: grid;
            grid-template-columns: repeat(2, auto);
            row-gap: 20px;
            justify-content: space-between;
        }
    }

    .body_specific_midia{
        padding: 50px 20px;
        .img_specific_midia{
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
            margin-bottom: 50px;

            img{
                width: 100%;
            }
        }
    }

    @media(max-width:460px){
        .body{
            .container{
                grid-template-columns: repeat(1, auto);
                row-gap: 20px;
                justify-content: center;
            }
        }

        .banner{
            .container{
                h2{
                    font-size: 35px;
                }
            }
        }
    }
`

export default MidiaStyle
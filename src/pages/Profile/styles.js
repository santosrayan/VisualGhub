import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${colors.primary};
    color: #fff;
    font-family: ${fonts.mainFont};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileContainer = styled.div`
    height: 100vh;
    width: 100vw;
    

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardProfile = styled.div`
    height: 900px;
    width: 700px;
    background-color: ${colors.secondary300};
    border-radius: 5px;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserContainer = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
`;

export const Picture = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-bottom: 15px;
`;

export const Name = styled.p`
    color: ${colors.light};
    font: 400 1.5rem 'Poppins';
    margin-bottom: 15px;
`;

export const Bio = styled.div`
    width: 400px;
    padding: 10px 10px 10px 0;
    border-radius: 5px;

    display: flex;
    align-items: center;
    margin-bottom: 30px;

    p{
        color: ${colors.light};
        font: ${fonts.text400};
    }
`;

export const Follows = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const FollowsCount = styled.div`
    font-size: 1.1rem;
    color: ${colors.light};
    display: flex;
    margin-right: 20px;
    align-items: center;
    
    p{
        font: ${fonts.text400};
        color: ${colors.light};
        margin-left: 5px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    background-color: ${colors.secondary100};
    color: ${colors.light};
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;

    h2{
        display: flex;
        align-items: center;
        font-size: 1rem;
        margin-right: 5px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;
import styled from "styled-components";

export const Article = styled.article`
  margin-left: 20px;
`;

export const H1 = styled.h1`
  display: block;
  background-image: linear-gradient(
    90deg, rgba(255,218,0,1) 0%, rgba(255,252,0,1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 45px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;

  margin: 10px auto 40px 0px;
`;

export const Enfasis = styled.p`
  display: inline-block;
  background-image: linear-gradient(
    90deg,
    #f06a6a 0%,
    rgba(238, 158, 39, 1) 54%,
    rgba(251, 170, 42, 1) 74%,
    rgba(253, 187, 45, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 33px;
  margin: -30px auto 30px auto;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const H2 = styled.h2`
  display: block;
  background-image: linear-gradient(
    90deg,
    rgba(230, 139, 27, 1) 0%,
    rgba(251, 170, 42, 1) 47%,
    rgba(253, 170, 45, 1) 69%,
    rgba(255, 166, 49, 1) 93%,
    rgba(255, 166, 97, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 32px;
  position: relative;
  margin: 30px auto 15px 0px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const H3 = styled.h3`
display: inline-block;
  color: #3f9bd8;
  font-size: 25px;
  position: relative;
  margin: 10px auto 10px auto;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const P = styled.p`
  display: inline-block;
  color: #d7d7d7;
  position: relative;
  margin: 25px 40px 25px auto;
  font-size: 19px;
  font-family: "Bahnschrift", sans-serif;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.3px;
`;

export const Ol = styled.ol`
  font-size: 19px;
  margin-top: 5px;
  font-family: "Bahnschrift", sans-serif;
  font-weight: normal;
  line-height: 150%;
  padding-left: 30px;

  & > li {
    margin: auto 40px 20px 0px;
    padding-left: 10px;
    position: relative;
    right: 10px;
  }

  & > li::marker {
    font-weight: 500;
    font-size: 25px;
  }
`;

export const Ul = styled.ul`
  list-style-type: disc;
  font-size: 19px;
  font-family: "Bahnschrift", sans-serif;
  font-weight: normal;
  line-height: 150%;
  padding-left: 0px;

  & > li {
    margin: 10px 40px 20px 0px;
  }

  & p{
    color: #d7d7d7;
    display: block;
  }
`;

export const UlSinViñeta = styled.ul`
  font-size: 19px;
  font-family: "Bahnschrift", sans-serif;
  font-weight: normal;
  line-height: 150%;
  padding-left: 0px;

  & > li {
    list-style-type: none;
    margin: 10px 40px 20px 0px;
  }

  & > li > strong {
    color: #5fd8c2;
  }
`;

export const A = styled.a`
  display: inline-block;
  color: #ab80ff;
  text-decoration: underline;
`;

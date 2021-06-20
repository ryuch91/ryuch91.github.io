import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProfileImage from "./ProfileImage"
import SocialLinks from "../SocialLinks"

const ProfileCardWrapper = styled.div`
  display: flex;
  padding: 1rem;
`

const ProfileContentWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ProfileImgWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

const ProfileTitle = styled.h1``

const ProfileSubtitle = styled.summary``

const ProfileDescription = styled.p``

const ProfileCard = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteMetadata{
          author{
            name
            short
            description
            socials{
              name
              author
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "profile-pic.jpg" }){
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  return(
    <ProfileCardWrapper>
      <ProfileContentWrapper>
        <ProfileTitle> {data.site.siteMetadata.author.name} </ProfileTitle>
        <ProfileSubtitle> {data.site.siteMetadata.author.short} </ProfileSubtitle>
        <ProfileDescription> {data.site.siteMetadata.author.description} </ProfileDescription>
        <SocialLinks />
      </ProfileContentWrapper>
      <ProfileImgWrapper>
        <ProfileImage image={data.placeholderImage.childImageSharp.gatsbyImageData} altText="Monster" title="Monster" />
      </ProfileImgWrapper>
    </ProfileCardWrapper>
  )
}

export default ProfileCard
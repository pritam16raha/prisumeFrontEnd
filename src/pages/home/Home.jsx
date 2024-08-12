import { motion, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Section } from '../../styles/globalStyles';
import { FiMail } from 'react-icons/fi';
import pic from '../../assets/images/1.png';
import pic2 from '../../assets/images/2.png';
import pic3 from '../../assets/images/3.png';
import pic4 from '../../assets/images/4.png';
import pic5 from '../../assets/images/5.png';
import { Link } from 'react-router-dom';


const Home = () => {

  const [showModal, setShowModal] = useState(false);
	const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};

	const variants = {
		hover: {
			y: 30,
			transition: {
				yoyo: Infinity,
				duration: 0.6,
			},
		},
	};
	const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

  return (
    <>
      <HeroSection id="hero">
				<HeroImage className="pattern" src={pic4} />
				<HeroImage className="guy" src={pic} />
				<CharacterContainer>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="one"
						src={pic3}
					/>
					<ImageCharacter
						dragConstraints={dragConstraints}
						className="two"
						src={pic2}
					/>
					{/* <ImageCharacter
						variants={variants}
						whileHover="hover"
						drag
						dragConstraints={dragConstraints}
						className="three"
						src={pic5}
					/> */}
				</CharacterContainer>
				<HeroContent>
					<Heading>I am Prisume</Heading>
					<HeroText>
						Craft Your Perfect Resume in Minutes - Stand Out from the Crowd!
            <Link to='/resume'>Build</Link> 
					</HeroText>
					<ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
								{inView ? (
									<> Chat with us</>
								) : (
									<FiMail color="white" size="2.3rem" />
								)}
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
				</HeroContent>
			</HeroSection>
			{/* <Modal showModal={showModal} toggleModal={toggleModal} /> */}
    </>
  )
}

export default Home;

const HomeContainer = styled.div`
    max-width: 1440px;
    margin: auto;
`

const HeroSection = styled(Section)`
  max-width: 1440px;
  margin: auto;
	background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
	background-size: cover;
	background-attachment: fixed;
	z-index: 11;
	align-items: center;
	height: 640px;
	position: relative;
	display: flex;

`;

const HeroImage = styled.img`
	z-index: 10;
	max-width: 20rem;
	position: absolute;
	left: 0;
	object-fit: cover;

	&.pattern {
		/* height: 100%; */
		/* max-height: 100%; */
		top: 0;
	}

	&.guy {
		bottom: 0;
	}
`;

const ImageCharacter = styled(motion.img)`
	z-index: 11;
	max-width: 20rem;
	position: absolute;
	/* width: clamp(90px, 15vw, 200px); */
	left: auto;

	&.one {
		top: 4rem;
    right: 2rem;
		/* right: 200px; */
		width: clamp(170px, 15vw, 230px);

		@media screen and (max-width: 768px) {
			right: 50%;
			transform: translateX(50%);
		}
	}

	&.two {
		bottom: 4rem;
		right: 1px;
		z-index: 100;
		@media screen and (max-width: 768px) {
			right: 50px;
		}
	}

	&.three {
		top: 3rem;
		left: 150px;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

const CharacterContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
`;

const HeroContent = styled.div`
	width: 100%;
	padding: 0 15px;
	z-index: 10;
	position: relative;
`;

const Heading = styled.h1`
	margin-bottom: 1.5rem;
	font-size: clamp(2.8rem, 6vw, 6.7rem);
	line-height: 1.1;
	font-weight: 600;
	text-align: center;
	color: white;
`;

const HeroText = styled.div`
	text-align: center;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	/* margin-bottom: 1.3rem; */
`;

const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;

const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;

const HeroButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background-color: white;
	color: #5238b1;
	cursor: pointer;
	transition: all 0.4s ease-in;

	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: #ef4b6c;
		border-radius: 50%;
	}

	&:hover {
		box-shadow: 0 0 9px 9px #5238b1;
		transition: box-shadow 0.3s ease-in;
	}`
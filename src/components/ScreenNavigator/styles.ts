import styled from 'styled-components/native';

interface ITextAndBorderColors{
	whereIm: string;
}

export const Container = styled.View`
	width: 100%;

	align-items: center;
	justify-content: center;

	flex-direction: row;

	background: #FFF;
`;

export const HomeContainer = styled.View<ITextAndBorderColors>`
	flex-direction: row;

	align-items: center;

	padding: 18px 17%;

	border-top-width: ${props => props.whereIm === 'home' ? '1px' : '0'};
	border-top-color: ${props => props.whereIm === 'home' ? '#FF6680' : '#C4C4D1'};
`;

export const HomeText = styled.Text<ITextAndBorderColors>`
	margin-left: 8px;

	font-size: 15px;
	font-weight: 500;
	color: ${props => props.whereIm === 'home' ? '#FF6680' : '#C4C4D1'};
`;

export const SavedCoursesContainer = styled.View<ITextAndBorderColors>`
	flex-direction: row;

	align-items: center;

	padding: 18px 17%;

	border-top-width: ${props => props.whereIm === 'saved-courses' ? '1px' : '0'};
	border-top-color: ${props => props.whereIm === 'saved-courses' ? '#FF6680' : '#C4C4D1'};
`;

export const SavedCoursesText = styled.Text<ITextAndBorderColors>`
	margin-left: 8px;

	font-size: 15px;
	font-weight: 500;
	color: ${props => props.whereIm === 'saved-courses' ? '#FF6680' : '#C4C4D1'};
`;
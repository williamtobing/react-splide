/**
 * Basic example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { Splide, SplideSlide } from '../../../../src/js';
import { createSlides } from "../utils/slides";

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
export default () => {
	return (
		<div className="wrapper">
			<h2>Autoplay</h2>

			<Splide
				options={ {
					type        : 'loop',
					gap         : '1rem',
					autoplay    : true,
					pauseOnFocus: false,
					arrows      : 'slider',
				} }
				hasSliderWrapper
				hasAutoplayControls
				hasAutoplayProgress
			>
				{ createSlides().map( slide => (
					<SplideSlide key={ slide.src }>
						<img src={ slide.src } alt={ slide.alt } />
					</SplideSlide>
				) ) }
			</Splide>
		</div>
	);
}
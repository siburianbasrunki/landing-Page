import React from "react";
import Fade from 'react-reveal/Fade';
import Section from "elements/Section";
import Features from "parts/Features";
import Button from "elements/Button";
import Cards from "elements/Cards";
import Lists from "elements/Lists";
import Hero from "assets/images/hero-image.png"
import Clients from "parts/Clients";
// import Footer from "parts/Footer";
import Featurestile01 from "assets/images/feature-tile-icon-01.svg"
import Featurestile02 from "assets/images/feature-tile-icon-02.svg"
import Featurestile03 from "assets/images/feature-tile-icon-03.svg"
export default function Homepage(){
    const features = [
        {
            imgSrc: Featurestile01,
            imgAlt : "Featurestile01",
            title: "Join the system",
            description : "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
        {
            imgSrc: Featurestile02,
            imgAlt: "Featurestile02",
            title : "Join the system",
            description : "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
        {
            imgSrc: Featurestile03,
            imgAlt: "Featurestile02",
            title : "Join the system",
            description : "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
    ];

    const listPricing = [
        {
            price: 270000,
            currencySymbol: "Rp",
            description : "Lorem ipsum is a common text",
            features: [
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:false,content: "Excepteur sint occaecat velit"},
                {isChecked:false,content: "Excepteur sint occaecat velit"},
            ]
        },
        {
            price: 47,
            currencySymbol: "$",
            description : "Lorem ipsum is a common text",
            features: [
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:false,content: "Excepteur sint occaecat velit"},
            ]

        },
        
        {
            
            price: 67,
            currencySymbol: "$",
            description : "Lorem ipsum is a common text",
            features: [
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
                {isChecked:true,content: "Excepteur sint occaecat velit"},
            ]

        }
    ]

    return (
        <div className="body-wrap">
            <main className="site-content">
                <Section className="hero illustration-section-01">
                    <div className="container-sm">
                            <div className="hero-inner section-inner">
                                <div className="hero-content container-xs">
                                    <Fade bottom> 
                                        <h1 className="mt-0 mb-16">
                                        Landing template for startups
                                        </h1>  
                                    </Fade>
                                    <div className="container-xs">
                                    <Fade bottom>
                                        <p className="mt-0 mb-32">
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>
                                    </div>
                                </div>
                                <div className="hero-figure illustration-element-01" data-reveal-value="20px">
                                    <Fade bottom>
                                    <img className="has-shadow" src={Hero} alt="Hero" width="896" height="504"/>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                </Section>
                <Clients></Clients>
                <Section className="features-tiles">
                <div className="container">
						<div className="features-tiles-inner section-inner">
							<div className="tiles-wrap">
                                {
                                    features.map((features,index) =>
                                        <Features key={index} delayinMS={index * 500} data={features}></Features>
                                    )
                                }
                            </div>
                        </div>
                </div>
                </Section>
                <Section className="pricing">
                    <div className="container">
						<div className="pricing-inner section-inner has-top-divider">
							<div className="section-header center-content">
								<div className="container-xs">
									<h2 className="mt-0 mb-16"> Simple, transarent pricing </h2>
									<p className="m-0"> Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
									</p>
								</div>
							</div>
							<div className="tiles-wrap">
                                {
                                    listPricing.map((list,index) => <Cards hasShadow>
                                        <div key={index} class="pricing-item-content">
											<div class="pricing-item-header pb-24 mb-24">
												<div class="pricing-item-price mb-4">
													<span class="pricing-item-price-currency h2">{list.currencySymbol}</span>
                                                    <span class="pricing-item-price-amount h1 pricing-switchable">{list.price}</span>
												</div>
												<div class="text-xs text-color-low">
													{list.description}
												</div>
											</div>
											<div class="pricing-item-features mb-40">
												<div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
													What’s included
												</div>
                                                <Lists data={list.features} isSmall className="pricing-item-features-list mb-32"></Lists>
											</div>
										</div>
										<div class="pricing-item-cta mb-8">
                                            <Button isSmall isBlock>Start free trial</Button>
										</div>
                                    </Cards> )
                                }
                                
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            {/* <Footer/> */}

        </div>
    )
}
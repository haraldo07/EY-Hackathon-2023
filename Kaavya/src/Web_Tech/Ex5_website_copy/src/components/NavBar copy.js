import React from 'react'; // Import the React library

const NavBar = () => {
    return (
        <>
            <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
                <header id="header" class="header-wrap" role="banner" aria-label="Site header">
                    <div class="header-top-menu-bg d-none d-lg-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-24">
                                    <div class="header-topmenu">
                                        <ul id="block-topmenu" class="clearfix navbar-nav mr-auto media-dropdown">
                                            <li class="nav-item gift-link trackContent" data-link-info="Gift Cards">
                                                <a href="/gift-cards" class="nav-link" id="gift-cards" data-drupal-link-system-path="node/95">Gift Cards</a>
                                            </li>
                                            <li class="nav-item dropdown trackContent menu-item--expanded dropdown" data-link-info="Media">
                                                <a href="" class="nav-link dropdown-toggle nav-link-" id="DardenMediaNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Media</a>
                                                <div class="dropdown-menu" aria-labelledby="DardenMediaNavbarDropdown">
                                                    <a class="dropdown-item trackContent" data-link-info="Media Contacts" href="/media/media-contacts" target="_self">Media Contacts</a>
                                                    <a class="dropdown-item trackContent" data-link-info="Press Releases" href="https://investor.darden.com/news/default.aspx" target="_blank">Press Releases</a>
                                                    <a class="dropdown-item trackContent" data-link-info="Media Library" href="/media/media-library" target="_self">Media Library</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-menu">
                        <div class="container">
                            <div class="row">
                                <div class="col-24">
                                    <div class="logo-menu-search">

                                        <div class="brand-logo">
                                            <a href="/" title="Darden" rel="Darden" data-link-info="Darden" class="navbar-brand trackContent">
                                                <img src={require("../images/darden-logo.svg")} alt="Darden" class="img-fluid d-inline-block align-top" />
                                            </a>
                                        </div>
                                        <div class="mega-mobile-wrap">
                                            {/* menu*/}
                                            <div class="mega-mobile-menu">
                                                <nav class="navbar navbar-expand-lg navbar-light">
                                                    <button class="navbar-toggler darden-toggler trackContent" data-link-info="darden-megamenu" type="button" data-toggle="collapse" data-target="#DardenMegaMenu" aria-controls="DardenMegaMenu" aria-expanded="false" aria-label="Toggle navigation" id="toggleer">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse darden-mobile-menu" id="DardenMegaMenu">
                                                        <div class="darden-megamenu">
                                                            <ul class="navbar-nav">
                                                                <li class="nav-item  dropdown has-megamenu trackContent" data-link-info="Our Company">
                                                                    <a class="nav-link dropdown-toggle  links" aria-expanded="false">Our Company</a>
                                                                    <div class="dropdown-menu megamenu mm-sm-our-company" role="menu">
                                                                        <div class="mega-submenu">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="our-company" href="/our-company" target="_self" class="links trackContent" data-link-info="About Us">About Us</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="our-company" href="/our-company/executive-leadership" target="_self" class="links trackContent" data-link-info="Executive &amp; Brand Leadership">Executive &amp; Brand Leadership</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="our-company" href="/our-company/board-of-directors" target="_self" class="links trackContent" data-link-info="Board of Directors">Board of Directors</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="our-company" href="/our-company/doing-business-with-darden" target="_self" class="links trackContent" data-link-info="Doing Business with Darden">Doing Business with Darden</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="our-company" href="/our-company/doing-business-with-darden/restaurant-construction" target="_self" class="links trackContent" data-link-info="Site Selection Criteria">Site Selection Criteria</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu br-none">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="our-company" href="http://www.franchisedarden.com/" target="_blank" class="links trackContent" data-link-info="International Franchising">International Franchising</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="nav-item  dropdown has-megamenu trackContent" data-link-info="Our Impact">
                                                                    <a class="nav-link dropdown-toggle data-toggle-custome links" aria-expanded="false">Our Impact</a>
                                                                    <div class="dropdown-menu megamenu mm-sm-our-impact" role="menu">
                                                                        <div class="mega-submenu">
                                                                            <h3 class="submenu-title"><a id="our-impact" href="/our-impact" target="_self" class="links trackContent" data-attr-info="We Are Here to Serve">We Are Here to Serve</a>
                                                                                <span class="submenu-l2-icon invisible"></span></h3>
                                                                            <ul class="list-unstyled m-submenu menudropdown">
                                                                                <li class="invisible"><a class="links trackContent" data-attr-info="darden-submenu">submenu</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu">
                                                                            <h3 class="submenu-title"><a id="our-impact" href="/our-impact/team-members" target="_self" class="links trackContent" data-attr-info="Our Team Members">Our Team Members</a>
                                                                                <span class="submenu-l2-icon"></span></h3>
                                                                            <ul class="list-unstyled m-submenu menudropdown">
                                                                                <li><a id="our-impact" href="/our-impact/team-members/investing-in-their-success" target="_self" class="links trackContent" data-attr-info="Investing in Their Success">Investing in Their Success</a></li>
                                                                                <li><a id="our-impact" href="/our-impact/team-members/providing-pathways-for-growth" target="_self" class="links trackContent" data-attr-info="Providing Pathways for Growth">Providing Pathways for Growth</a></li>
                                                                                <li><a id="our-impact" href="/our-impact/team-members/ensuring-an-inclusive-and-diverse-culture" target="_self" class="links trackContent" data-attr-info="Ensuring an Inclusive &amp; Diverse Culture">Ensuring an Inclusive &amp; Diverse Culture</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu">
                                                                            <h3 class="submenu-title"><a id="our-impact" href="/our-impact/guests" target="_self" class="links trackContent" data-attr-info="Our Guests">Our Guests</a>
                                                                                <span class="submenu-l2-icon invisible"></span>
                                                                            </h3>
                                                                            <ul class="list-unstyled m-submenu menudropdown">
                                                                                <li class="invisible"><a class="links trackContent" data-attr-info="darden-submenu">submenu</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu">
                                                                            <h3 class="submenu-title"><a id="our-impact" href="/our-impact/communities" target="_self" class="links trackContent" data-attr-info="Our Communities">Our Communities</a>
                                                                                <span class="submenu-l2-icon"></span></h3>
                                                                            <ul class="list-unstyled m-submenu menudropdown">
                                                                                <li><a id="our-impact" href="/our-impact/communities/giving-back" target="_self" class="links trackContent" data-attr-info="Giving Back">Giving Back</a></li>
                                                                                <li><a id="our-impact" href="/our-impact/communities/sustainability" target="_self" class="links trackContent" data-attr-info="Sustainability">Sustainability</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu br-none">
                                                                            <h3 class="submenu-title"><a id="our-impact" href="/our-impact/shareholders" target="_self" class="links trackContent" data-attr-info="Our Shareholders">Our Shareholders</a>
                                                                                <span class="submenu-l2-icon invisible" data-plus="8"></span>
                                                                            </h3>
                                                                            <ul class="list-unstyled m-submenu menudropdown">
                                                                                <li class="invisible"><a class="links trackContent" data-attr-info="darden-submenu">submenu</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="nav-item  dropdown has-megamenu trackContent" data-link-info="Investors">
                                                                    <a class="nav-link dropdown-toggle  links" aria-expanded="false">Investors</a>
                                                                    <div class="dropdown-menu megamenu mm-sm-investor" role="menu">
                                                                        <div class="mega-submenu">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/home/default.aspx" target="_blank" class="links trackContent" data-link-info="Overview">Overview</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/news/default.aspx" target="_blank" class="links trackContent" data-link-info="News">News</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/events/events/default.aspx" target="_blank" class="links trackContent" data-link-info="Events">Events</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/stock-info/default.aspx#stock-quote" target="_blank" class="links trackContent" data-link-info="Stock Info">Stock Info</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/financials/quarterly-reports/default.aspx" target="_blank" class="links trackContent" data-link-info="Financials">Financials</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/governance/governance-documents/default.aspx" target="_blank" class="links trackContent" data-link-info="Governance">Governance</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu br-none">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li>
                                                                                    <a id="investor" href="/our-impact" target="_self" class="links trackContent" data-link-info="ESG">ESG</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a id="investor" href="https://investor.darden.com/resources/investor-faqs/default.aspx" target="_blank" class="links trackContent" data-link-info="Resources">Resources</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="nav-item  dropdown has-megamenu trackContent" data-link-info="Careers">
                                                                    <a class="nav-link dropdown-toggle  links" aria-expanded="false">Careers</a>
                                                                    <div class="dropdown-menu megamenu mm-sm-career" role="menu">
                                                                        <div class="mega-submenu">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <h3 class="submenu-title">
                                                                                    <li>
                                                                                        <a id="careers" href="/careers" target="_self" class="links trackContent" data-link-info="Careers Overview">Careers Overview</a>
                                                                                    </li></h3>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mega-submenu br-none">
                                                                            <ul class="list-unstyled m-submenu">
                                                                                <li><a id="careers" href="/careers/restaurant-careers" target="_self" class="links trackContent" data-attr-info="Restaurant Careers">Restaurant Careers</a></li>
                                                                                <li><a id="careers" href="/careers/corporate-careers" target="_self" class="links trackContent" data-attr-info="Corporate Careers">Corporate Careers</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="nav-item d-block d-lg-none trackContent" data-link-info="Gift Cards">
                                                                    <a class="nav-link gift-active links" href="/gift-cards">Gift Cards</a>
                                                                </li>
                                                                <li class="nav-item dropdown has-megamenu media-submenu d-block d-lg-none trackContent" data-link-info="Media">
                                                                    <a class="nav-link dropdown-toggle links">Media</a>
                                                                    <div class="dropdown-menu megamenu" role="menu">
                                                                        <div class="row">
                                                                            <div class="col-xs-24">
                                                                                <ul class="list-unstyled">
                                                                                    <li class="trackContent" data-link-info="Media Contacts">
                                                                                        <a class="links trackContent" id="media" href="/media/media-contacts" target="_self">Media Contacts</a>
                                                                                    </li>
                                                                                    <li class="trackContent" data-link-info="Press Releases">
                                                                                        <a class="links trackContent" id="media" href="https://investor.darden.com/news/default.aspx" target="_blank">Press Releases</a>
                                                                                    </li>
                                                                                    <li class="trackContent" data-link-info="Media Library">
                                                                                        <a class="links trackContent" id="media" href="/media/media-library" target="_self">Media Library</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="views-exposed-form block block-views block-views-exposed-filter-blocksearch-api-page-1" data-drupal-selector="views-exposed-form-search-api-page-1" id="block-exposedformsearch-apipage-1-2">
                                                            <div class="content">
                                                                <form action="/search" method="get" id="views-exposed-form-search-api-page-1" accept-charset="UTF-8">
                                                                    <fieldset class="js-form-item js-form-type-search-api-autocomplete form-type-search-api-autocomplete js-form-item-search-api-fulltext form-item-search-api-fulltext form-no-label form-group">
                                                                        <div class="darden-search-wrap">
                                                                            <div class="menu-container">
                                                                                {/* Search */}
                                                                                <div class="menu-search-container">
                                                                                    <div class="search-input-block">
                                                                                        <div class="menu-search-input">
                                                                                            <a class="form-search-icon" href="javascript:void(0);">
                                                                                                <em aria-hidden="true" class="icon-search"></em>
                                                                                            </a>
                                                                                            <a class="menu-search-close" href="#">
                                                                                                <em aria-hidden="true" class="icon-close-thin"></em>
                                                                                            </a>
                                                                                            <input data-drupal-selector="edit-search-api-fulltext" data-search-api-autocomplete-search="search_api" class="form-autocomplete form-control menu-search-input-form ui-autocomplete-input" data-autocomplete-path="/search_api_autocomplete/search_api?display=page_1&amp;&amp;filter=search_api_fulltext" type="text" id="edit-search-api-fulltext" name="search_api_fulltext" value="" size="30" maxlength="128" aria-label="Search Darden.com" placeholder="Search Darden.com" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" />
                                                                                            <label for="d-search-cancel" class="search-label">Cancel</label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="search-submenu-wrap">
                                                                                        <div class="search-sub-menu">
                                                                                            <h3 class="primary-search-title">Suggestions</h3>
                                                                                            <ul class="primary-search">
                                                                                                <li class="trackContent" data-link-info="Investors">
                                                                                                    <a href="https://investor.darden.com/investors/investor-relations/default.aspx" target="_blank"> Investors </a>
                                                                                                </li>
                                                                                                <li class="trackContent" data-link-info="ESG">
                                                                                                    <a href="/our-impact" target="_self"> ESG </a>
                                                                                                </li>
                                                                                                <li class="trackContent" data-link-info="Giving Back">
                                                                                                    <a href="/our-impact/communities/giving-back" target="_self"> Giving Back </a>
                                                                                                </li>
                                                                                                <li class="trackContent" data-link-info="Inclusion &amp; Diversity">
                                                                                                    <a href="/our-impact/team-members/ensuring-an-inclusive-and-diverse-culture" target="_self"> Inclusion &amp; Diversity </a>
                                                                                                </li>
                                                                                                <li class="trackContent" data-link-info="Sustainability">
                                                                                                    <a href="/our-impact/communities/sustainability" target="_self"> Sustainability </a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="fade-screen"> </div>
                                                                    </fieldset></form></div>
                                                            <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-group" id="edit-actions"><input data-drupal-selector="edit-submit-search-api" type="submit" id="edit-submit-search-api" value="Apply" class="button js-form-submit form-submit btn btn-primary form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </nav></div>
                                        </div>
                                    </div>
                                    <ul class="darden-search-menu-icon  d-none d-lg-block">
                                        <li class="menu-search">
                                            <a href="#">
                                                <em aria-hidden="true" class="icon-search"></em>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header></div>
        </>
    );
}

export default NavBar; // Export the NavBar as the default export

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';
import NavigationLink from './NavigationLink';
import NavigationLinkTop from './NavigationLinkTop';

function Navigation({ white }) {
  const data = useStaticQuery(graphql`
    {
      navigation: settingsYaml(slug: { eq: "navigation" }) {
        logo {
          childImageSharp {
            fluid(maxWidth: 120) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        link1
        link2
        link3
        link4
        link5
        link6
        phoneLabel
        addressLabel
      }
      global: settingsYaml(slug: { eq: "global" }) {
        phone
        email
        address
      }
    }
  `);
  const { navigation } = data;
  const { global } = data;
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full h-12 pr-5 pl-4 z-40 ${white ? 'bg-white' : ''}`}>
      <div className="flex justify-between items-center h-full">
        <div className="w-32" />
        <div className="md:flex items-center justify-center hidden">
          <NavigationLinkTop to="/">
            <div>{navigation.link1}</div>
          </NavigationLinkTop>
          <NavigationLinkTop to="/fahrraeder/">
            <div>{navigation.link2}</div>
          </NavigationLinkTop>
          <NavigationLinkTop to="/besichtigung/">
            <div>{navigation.link3}</div>
          </NavigationLinkTop>
        </div>
        <div className="w-32 flex justify-end">
          <button
            className="p-2 focus:outline-none z-20"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <MenuButton open={open} />
          </button>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 h-screen bg-white w-0 max-w-full transition-all overflow-x-hidden overflow-y-scroll"
        style={open ? { width: '400px' } : {}}
      >
        <div className="pt-16 px-3 pb-16">
          <div className="flex flex-col divide-y divide-gray-200">
            <NavigationLink setOpen={setOpen} to="/">
              <div>{navigation.link1}</div>
            </NavigationLink>
            <NavigationLink setOpen={setOpen} to="/fahrraeder/">
              <div>{navigation.link2}</div>
            </NavigationLink>
            <NavigationLink setOpen={setOpen} to="/besichtigung/">
              <div>{navigation.link3}</div>
            </NavigationLink>
            <div className="w-full pt-10 pb-16 px-2">
              <h2 className="text-sm font-bild uppercase mb-2 tracking-wider font-medium">
                {navigation.link4}
              </h2>
              <div className="flex flex-col space-y-3 font-light py-1">
                <div>
                  <div className="">{global.phone}</div>
                  <div className="">{global.email}</div>
                </div>
                <div>
                  <div className="font-normal">{navigation.addressLabel}</div>
                  <div
                    className="leading-tight whitespace-pre"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: global.address }}
                  />
                </div>
              </div>
            </div>
            <NavigationLink setOpen={setOpen} to="/impressum/">
              <div>{navigation.link5}</div>
            </NavigationLink>
            <NavigationLink setOpen={setOpen} to="/datenschutz/">
              <div>{navigation.link6}</div>
            </NavigationLink>
            <div />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navigation.defaultProps = {
  white: false,
};

Navigation.propTypes = {
  white: PropTypes.bool,
};

export default Navigation;

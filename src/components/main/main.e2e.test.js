import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Component`, () => {
  it(`should handle click on header logo`, function () {
    const onTitleClick = jest.fn();

    const mainComponent = shallow(
        <Main foundPlacesCount={2} headerLogoClickHandler={onTitleClick}/>
    );

    const mainComponentHeaderLogo = mainComponent.find(`a.header__logo-link`);

    mainComponentHeaderLogo.props().onClick();

    expect(onTitleClick.mock.calls.length).toBe(1);
  });

});

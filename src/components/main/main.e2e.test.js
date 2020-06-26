import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Component`, () => {
  it(`should handle click on header logo`, function () {
    const handleTitleClick = jest.fn();

    const mainComponent = shallow(
        <Main foundPlacesCount={2} onHeaderLogoClick={handleTitleClick}/>
    );

    const mainComponentHeaderLogo = mainComponent.find(`a.header__logo-link`);

    mainComponentHeaderLogo.simulate(`click`, {preventDefault() {}});

    expect(handleTitleClick).toHaveBeenCalledTimes(1);
  });

});

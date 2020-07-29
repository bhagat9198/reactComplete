import React from 'react';
import classes from './Logo.css';

// giving the path of the img
import burgerLogo from '../../assets/images/burgerLogo.png'

const Logo = props => {
  return <div className={classes.Logo}>
    {/* src of img should be set dynamically */}
    {/* we can do like this also  */}
    {/* <img src='../../assets/images/burgerLogo.png' /> */}
    {/* it will not work as we expect it to work due to the way our binding workflow is setup. In whole project we are only working in 'src' project. in the end webpack will take all these files and bundles them together to create new output folder. we cant see that here as we are in development mode and that bundling will take place in memory but once we do publish our app then we will get real dfferent folder where all teh optimized, compiled, bundled assests are contained. thus, this 'assets' folder will not be shipped to any real server. the whole 'assests' or whole 'src' folder wont be shipped to any server. hence we should make webpack awarethat we are using an image */}
    {/* to make aware, we will use import statmenet and pass dynamicaly to img tag. 
    just like css code, it doest mean that webpack mixes our images with js code. it just to make webpack aware and then webpack will handle this img with a special plugin or a specail module taht was added to webpack to its config file. it will then copy to destination directory which it creates(within a mememory for development) */}
    {/* burgerLogo will just return the path where compiled, opatimize img is stored */}
    <img src={burgerLogo} alt='Burger' />
  </div>
};

export default Logo;
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const pages = ['Planner', 'Editor'];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [title, setTitle] = React.useState(pages[0]);

  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenEditor = () => {
    setTitle(pages[1]);
    setAnchorElNav(null);
  };

  const handleOpenPlanner = () => {
    setTitle(pages[0]);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleOpenNavMenu}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar-nav"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem onClick={handleOpenPlanner}>Planner</MenuItem>
          <MenuItem onClick={handleOpenEditor}>Editor</MenuItem>
        </Menu>
        <Typography
          className={classes.title}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        <IconButton color="inherit" onClick={handleOpenUserMenu}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id="menu-appbar-user"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

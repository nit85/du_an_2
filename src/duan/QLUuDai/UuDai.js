import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function UuDai() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h2" noWrap component="div">
     Home
        </Typography>
        
        <TextField id="standard-basic" label="T??m ki???m" variant="standard" style={{ marginLeft: "1000px" }} /><Button variant="contained"
                              class="btn btn-outline-warning" style={{ marginTop: "10px" }} startIcon={<SearchIcon />}

                          ></Button>
                            <p style={{marginTop:"30px", marginLeft:"10px"}}>vipp2001</p>
        <img src="#" width="80px"/>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
                              <ListItem disablePadding>
                                  <ListItemButton >
                                      <ListItemIcon>
                                      <AssignmentIcon />
                                      </ListItemIcon>
                                     <ListItemText  primary="Qu???n  L?? S???n Ph???m " />
                                  </ListItemButton>
                              </ListItem>

                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <AccountBoxIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Qu???n L?? T??i Kho???n" />
                                  </ListItemButton>
                              </ListItem>

                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <AssignmentIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Qu???n L?? ????n H??ng" />
                                  </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <AssignmentIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Qu???n L?? Danh M???c" />
                                  </ListItemButton>
                              </ListItem>

                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <AssignmentIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Qu???n L?? ??u ????i" />
                                  </ListItemButton>
                              </ListItem>

                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <BarChartIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="Th???ng K??" />
                                  </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                  <ListItemButton>
                                      <ListItemIcon>
                                      <AccountBoxIcon />
                                      </ListItemIcon>
                                      <ListItemText primary="????ng Xu??t" />
                                  </ListItemButton>
                              </ListItem>
                          </List>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <main class="container"   >
              <div class=" mt-4 offset-1 mb -4" style={{ marginLeft: "-20px" }}>   <Button variant="contained" class="btn btn-outline-warning" startIcon={< ControlPointIcon />}

              >Th??m 1 ??u ????i cho kh??ch h??ng</Button></div>
              <div style={{ marginLeft: "-10px", marginTop: "-50px", height: "20px" }}>            
              </div>
              <section class="row " style={{ marginLeft: "-140px" , width:"100%"}}>

                  <div class="offset-1 mt-5  " >
                      <form >
                          <div class="card">
                              <div class="card-header" >
                                  <b>Qu???n l?? ??u ????i </b>
                              </div>
                              <div class="card-body">

                                  <div class="row">

                                      <div class="col">
                                          <TextField id="standard-basic" label="T??m ki???m" variant="standard" style={{ marginLeft: "850px" }} /><Button variant="contained"
                                              class="btn btn-outline-warning" style={{ marginTop: "10px" }} startIcon={<SearchIcon />}

                                          ></Button>
                                          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                                              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                                  <TableHead>
                                                      <TableRow>
                                                          <TableCell>ID</TableCell>
                                                          <TableCell align="right" style={{marginLeft:"-40%"}}>??u ????i m???ii nh???t&nbsp;</TableCell>
                                                          <TableCell align="right">H??nh ?????ng&nbsp;</TableCell>
                                                          <TableCell align="right">H??nh ?????ng&nbsp;</TableCell>
                                                          <TableCell align="right">Xem chi ti???t&nbsp;</TableCell>
                                                      </TableRow>
                                                  </TableHead>
                                                  <TableBody>

                                                      <TableRow

                                                      >
                                                          <TableCell align="right">1</TableCell>
                                                   
                                                          <TableCell align="right">Ngagy 28/9/2021 d??nh t??ng cho kh??ch h??ng th??n thi???t, khuy???n m??i 30% c??c s???n ph???m tr??? gi?? 2.000.000 tr??? l??n </TableCell>
                                                     
                                                          <TableCell>

                                                              <Button variant="contained" class="btn btn-outline-primary" startIcon={<CreateSharpIcon />}

                                                              >  S???a</Button>
                                                          </TableCell>
                                                          <TableCell>
                                                              <Button variant="outlined" class="btn btn-outline-danger" startIcon={<DeleteIcon />}>
                                                                  X??a
                                                              </Button>
                                                          </TableCell>
                                                           <TableCell>
                                                              <Button variant="outlined" class="btn btn-outline-info" startIcon={<RemoveRedEyeIcon  />}>
                                                                  Xem chi ti???t
                                                              </Button>
                                                          </TableCell>
                                                      </TableRow>

                                                  </TableBody>
                                              </Table>
                                          </TableContainer>
                                      </div>
                                  </div>
                              </div>

                          </div>


                          <div class="card-footer text-muted">
                              <ul className="pagination" style={{ position: 'absolute', marginLeft: "60%", marginTop: '10%' }}>
                                  <li class="page-item">
                                      <a class="page-link">Trang truoc</a>
                                  </li>
                                  <li class="page-item">
                                      <a class="page-link">2</a>
                                  </li>
                                  <li class="page-item">
                                      <a class="page-link">Trang sau</a>
                                  </li>
                              </ul>
                          </div>
                      </form>
                  </div>
              </section>
          </main>
    </Box>
  </Box>
  );
}
export default UuDai;
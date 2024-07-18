// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import './Header.scss'

// project import
import Search from './Search';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      <div className="head">
        <div className="search">
          <Search/>
        </div>
        <div className="profile">
          <select name="" id="">
            <option value="">John</option>
            <option value="">John</option>
          </select>
        </div>
      </div>
    </>
  );
}

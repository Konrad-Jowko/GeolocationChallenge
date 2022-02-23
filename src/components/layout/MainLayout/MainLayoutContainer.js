import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getGlobal, getUser, getSearch} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  globalData: getGlobal(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  getSearch: (adress, noSave) => dispatch(getSearch(adress, noSave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

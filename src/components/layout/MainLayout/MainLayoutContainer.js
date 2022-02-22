import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getGlobal } from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  globalData: getGlobal(state),
});

export default connect(mapStateToProps)(MainLayout);

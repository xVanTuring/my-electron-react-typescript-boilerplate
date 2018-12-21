import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counter';
import Counter from '../components/Counter';

function mapStateToProps(state: any) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(CounterActions as any, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

import purchaseDetailsReducer from '../purchaseDetails';
import actions from '@magento/venia-concept/esm/actions/purchaseDetails';

test('purchaseDetails.request: toggle isFetching to true', () => {
    expect(
        purchaseDetailsReducer({ isFetching: false }, { type: actions.request })
    ).toEqual({ isFetching: true });
});

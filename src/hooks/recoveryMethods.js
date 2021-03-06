import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadRecoveryMethods } from '../actions/account'
import { wallet } from '../utils/wallet'

const empty = []

export function useRecoveryMethods(accountId) {
    const recoveryMethods = useSelector(state =>
        state.recoveryMethods[accountId]
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (accountId === wallet.getAccountId() && !recoveryMethods) {
            dispatch(loadRecoveryMethods(accountId))
        }
    }, [accountId])

    return recoveryMethods || empty
}

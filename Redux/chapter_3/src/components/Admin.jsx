import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery, useUpdateAccountsMutation } from "../api/AdminSlice";

function Admin() {
    const { data , error, isLoading, isSuccess} = useGetAccountsQuery();
    const [addAccount] = useAddAccountsMutation();
    const [deleteAccount] = useDeleteAccountsMutation();
    const [updateAccount] = useUpdateAccountsMutation()

    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Admin Component</b>
                </h4>
                {isLoading? <p>Loading...</p>:null}
                {isSuccess && data &&
                    data.map((account) => (
                        <p key={account.id}>
                            {account.id} : {account.amount}
                            <button onClick={() => deleteAccount(account.id)}>Delete Account</button>
                            <button onClick={() => updateAccount({ id: account.id, amount: 777 })}>Update Account</button>
                        </p>
                    ))}

                <button onClick={() => addAccount({ id: data?.length + 1 || 1, amount: 102 })}>
                    Add Account
                </button>
            </div>
        </div>
    );
}

export default Admin;

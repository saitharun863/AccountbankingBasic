class Accounts{
    AccountId : number;
    Balance : number;
    constructor(accountId: number, balance: number) {
        this.AccountId = accountId;
        this.Balance = balance;
    }
}
class LoanAccount extends Accounts{
    Deposit(AccountId : number, Amount: number) {
        if (this.AccountId === AccountId) {
            this.Balance += Amount;
            console.log(`Deposited ${Amount} to account ${AccountId}. New balance: ${this.Balance}`);
        } else {
            console.log(`Account ID ${AccountId} does not match.`);
        }
    }
}
class SavingsAccount extends Accounts{
    Deposit(AccountId: number, Amount: number): void {
        if (this.AccountId === AccountId) {
            this.Balance += Amount;
            console.log(`Deposited ${Amount} to account ${AccountId}. New balance: ${this.Balance}`);
        } else {
            console.log(`Account ID ${AccountId} does not match.`);
        }
    }

    Withdraw(AccountId: number, Amount: number): void {
        if (this.AccountId === AccountId) {
            if (this.Balance >= Amount) {
                this.Balance -= Amount;
                console.log(`Withdrew ${Amount} from account ${AccountId}. New balance: ${this.Balance}`);
            } else {
                console.log(`Insufficient balance in account ${AccountId}.`);
            }
        } else {
            console.log(`Account ID ${AccountId} does not match.`);
        }
    }
}
class CurrentAccount extends Accounts{
    withdraw(AccountId: number, Amount: number): void {
        if (this.AccountId === AccountId) {
            if (this.Balance >= Amount) {
                this.Balance -= Amount;
                console.log(`Withdrew ${Amount} from account ${AccountId}. New balance: ${this.Balance}`);
            } else {
                console.log(`Insufficient balance in account ${AccountId}.`);
            }
        } else {
            console.log(`Account ID ${AccountId} does not match.`);
        }
    }
}

class AccountManager {
    static manageAccounts(): void {
        let la = new LoanAccount(1316, 15000);
        console.log(`LoanAccount created with ID: ${la.AccountId} and Balance: ${la.Balance}`);
        console.log("After operations with Loan Account");
        la.Deposit(1316,150);
        console.log();

        let sa = new SavingsAccount(1316, 15000);
        console.log(`SavingAccount created with ID: ${sa.AccountId} and Balance: ${sa.Balance}`);
        console.log("After operations with Savings Account");
        sa.Deposit(1316,1000);
        sa.Withdraw(1316,500);
        console.log();

        let ca = new CurrentAccount(1316,15000);
        console.log(`CurrentAccount created with ID: ${ca.AccountId} and Balance: ${ca.Balance}`);
        console.log("After operations with Current Account");
        ca.withdraw(1316,15000);
    }
}
AccountManager.manageAccounts();
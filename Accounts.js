var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Accounts = /** @class */ (function () {
    function Accounts(accountId, balance) {
        this.AccountId = accountId;
        this.Balance = balance;
    }
    return Accounts;
}());
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoanAccount.prototype.Deposit = function (AccountId, Amount) {
        if (this.AccountId === AccountId) {
            this.Balance += Amount;
            console.log("Deposited ".concat(Amount, " to account ").concat(AccountId, ". New balance: ").concat(this.Balance));
        }
        else {
            console.log("Account ID ".concat(AccountId, " does not match."));
        }
    };
    return LoanAccount;
}(Accounts));
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.Deposit = function (AccountId, Amount) {
        if (this.AccountId === AccountId) {
            this.Balance += Amount;
            console.log("Deposited ".concat(Amount, " to account ").concat(AccountId, ". New balance: ").concat(this.Balance));
        }
        else {
            console.log("Account ID ".concat(AccountId, " does not match."));
        }
    };
    SavingsAccount.prototype.Withdraw = function (AccountId, Amount) {
        if (this.AccountId === AccountId) {
            if (this.Balance >= Amount) {
                this.Balance -= Amount;
                console.log("Withdrew ".concat(Amount, " from account ").concat(AccountId, ". New balance: ").concat(this.Balance));
            }
            else {
                console.log("Insufficient balance in account ".concat(AccountId, "."));
            }
        }
        else {
            console.log("Account ID ".concat(AccountId, " does not match."));
        }
    };
    return SavingsAccount;
}(Accounts));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.withdraw = function (AccountId, Amount) {
        if (this.AccountId === AccountId) {
            if (this.Balance >= Amount) {
                this.Balance -= Amount;
                console.log("Withdrew ".concat(Amount, " from account ").concat(AccountId, ". New balance: ").concat(this.Balance));
            }
            else {
                console.log("Insufficient balance in account ".concat(AccountId, "."));
            }
        }
        else {
            console.log("Account ID ".concat(AccountId, " does not match."));
        }
    };
    return CurrentAccount;
}(Accounts));
var AccountManager = /** @class */ (function () {
    function AccountManager() {
    }
    AccountManager.manageAccounts = function () {
        var la = new LoanAccount(1316, 15000);
        console.log("LoanAccount created with ID: ".concat(la.AccountId, " and Balance: ").concat(la.Balance));
        console.log("After operations with Loan Account");
        la.Deposit(1316, 150);
        console.log();
        var sa = new SavingsAccount(1316, 15000);
        console.log("SavingAccount created with ID: ".concat(sa.AccountId, " and Balance: ").concat(sa.Balance));
        console.log("After operations with Savings Account");
        sa.Deposit(1316, 1000);
        sa.Withdraw(1316, 500);
        console.log();
        var ca = new CurrentAccount(1316, 15000);
        console.log("CurrentAccount created with ID: ".concat(ca.AccountId, " and Balance: ").concat(ca.Balance));
        console.log("After operations with Current Account");
        ca.withdraw(1316, 15000);
    };
    return AccountManager;
}());
AccountManager.manageAccounts();

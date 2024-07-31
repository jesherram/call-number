# capacitor-call-number

Plugin to call number from ionic capacitor

## Install

```bash
npm install capacitor-call-number
npx cap sync
```

## API

<docgen-index>

* [`call(...)`](#call)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### call(...)

```typescript
call(options?: { number?: string | undefined; bypassAppChooser?: boolean | undefined; } | undefined) => Promise<CallNumberResult>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ number?: string; bypassAppChooser?: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#callnumberresult">CallNumberResult</a>&gt;</code>

--------------------


### Interfaces


#### CallNumberResult

| Prop          | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |

</docgen-api>

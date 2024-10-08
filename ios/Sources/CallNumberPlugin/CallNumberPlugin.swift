import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CallNumberPlugin)
public class CallNumberPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CallNumberPlugin"
    public let jsName = "CallNumber"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CallNumber()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func call(_ call: CAPPluginCall) {
        let phoneNumber = call.getString("number") ?? ""
        guard let number = URL(string: "tel://" + phoneNumber) else { return }
            UIApplication.shared.open(number)
        call.resolve()
    }
}

import Foundation

@objc public class CallNumber: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

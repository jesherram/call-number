// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCallNumber",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorCallNumber",
            targets: ["CallNumberPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CallNumberPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CallNumberPlugin"),
        .testTarget(
            name: "CallNumberPluginTests",
            dependencies: ["CallNumberPlugin"],
            path: "ios/Tests/CallNumberPluginTests")
    ]
)
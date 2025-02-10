  <motion.div
    key={service.name}
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
    className="group relative w-full max-w-[95%] xs:max-w-sm cursor-pointer"
    style={{ backfaceVisibility: 'hidden' }}
    onClick={() => setSelectedService(service)}
  >
    {/* Card Container */}
    <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black/80">
      {/* Card Content */}
      <div className="relative flex flex-col h-full overflow-hidden">
        {/* Image */}
        <div className="relative flex-1 overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-white p-4">
          {service.name}
        </h3>
        {/* Description */}
        <p className="text-base text-gray-300 p-4">
          {service.description}
        </p>
        {/* Action Button */}
        <div className="mt-4 sm:mt-6 w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
            <div className="relative flex items-center justify-center gap-2 px-4 py-2">
              <span className="text-xs font-semibold text-white">
                Learn More
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div> 